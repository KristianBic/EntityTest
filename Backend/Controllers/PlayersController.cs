using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Entities;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlayersController : ControllerBase
{
    private readonly AppDbContext _dbContext;

    public PlayersController(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet]
    public async Task<IActionResult> GetPlayers()
    {
        // map entity to DTO
        var players = await _dbContext.Players
            .Select(p => new PlayerDto 
            {
                Id = p.Id,
                Name = p.Name
            })
            .ToListAsync();

        return Ok(players);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetPlayer(int id)
    {
        var player = await _dbContext.Players
            .Where(p => p.Id == id)
            .Select(p => new PlayerDto 
            {
                Id = p.Id,
                Name = p.Name
            })
            .FirstOrDefaultAsync();

        if (player == null)
            return NotFound();

        return Ok(player);
    }

    [HttpPost]
    public async Task<IActionResult> CreatePlayer([FromBody] PlayerCreateDto dto)
    {
        // If model is NOT valid, return 400
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var player = new Player 
        {
            Name = dto.Name,
        };

        _dbContext.Players.Add(player);
        await _dbContext.SaveChangesAsync();

        // map entity to DTO
        var playerDto = new PlayerDto
        {
            Id = player.Id,
            Name = player.Name
        };

        // return DTO instead of the full entity
        return CreatedAtAction(
            nameof(GetPlayer), 
            new { id = player.Id }, 
            playerDto
        );
    }

    [HttpPut("{id}")]       
    public async Task<IActionResult> UpdatePlayer(int id, [FromBody] PlayerUpdateDto dto)
    {
        if (!ModelState.IsValid) 
        {
            return BadRequest(ModelState);
        }
        if (dto.Id != id)
            return BadRequest("ID mismatch");
        var player = await _dbContext.Players.FindAsync(id);
        if (player == null)
        {
            return NotFound();
        }
        player.Name = dto.Name;
        await _dbContext.SaveChangesAsync();

        var result = new PlayerDto
        {
            Id = player.Id,
            Name = player.Name
        };
        
        return Ok(result);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePlayer(int id)
    {
        var player = await _dbContext.Players.FindAsync(id);
        if (player == null)
        {
            return NotFound();
        }
        _dbContext.Players.Remove(player);
        await _dbContext.SaveChangesAsync();

        return NoContent();
    }
}
