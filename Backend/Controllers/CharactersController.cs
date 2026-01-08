using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Entities;
using Backend.DTOs;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CharactersController : ControllerBase
{
    private readonly AppDbContext _dbContext;

    public CharactersController(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    [HttpGet]
    public async Task<IActionResult> GetCharacters()
    {
        var characters = await _dbContext.Characters
            .Select(c => new CharacterDto
            {
                Id = c.Id,
                Name = c.Name,
                PlayerId = c.PlayerId
            })
            .ToListAsync();

        return Ok(characters);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCharacter(int id)
    {
        var character = await _dbContext.Characters.FindAsync(id);
        if (character == null) return NotFound();

        return Ok(new CharacterDto
        {
            Id = character.Id,
            Name = character.Name,
            PlayerId = character.PlayerId
        });
    }

    [HttpPost]
    public async Task<IActionResult> CreateCharacter([FromBody] CreateCharacterDto dto)
    {
        var character = new Character
        {
            Name = dto.Name,
            PlayerId = dto.PlayerId
        };

        _dbContext.Characters.Add(character);
        await _dbContext.SaveChangesAsync();

        var result = new CharacterDto
        {
            Id = character.Id,
            Name = character.Name,
            PlayerId = character.PlayerId
        };

        return CreatedAtAction(nameof(GetCharacter), new { id = character.Id }, result);
    }
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateCharacter(int id, [FromBody] UpdateCharacterDto dto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var character = await _dbContext.Characters.FindAsync(id);
        if (character == null)
        {
            return NotFound();
        }

        character.Name = dto.Name;

        await _dbContext.SaveChangesAsync();

        var result = new CharacterDto
        {
            Id = character.Id,
            Name = character.Name,
            PlayerId = character.PlayerId
        };

        return Ok(result);
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCharacter(int id)
    {
        var character = await _dbContext.Characters.FindAsync(id);
        if (character == null)
        {
            return NotFound();
        }

        _dbContext.Characters.Remove(character);
        await _dbContext.SaveChangesAsync();

        return NoContent();
    }
    [HttpGet("byPlayer/{playerId}")]
    public async Task<IActionResult> GetCharactersByPlayer(int playerId)
    {
        var characters = await _dbContext.Characters
            .Where(c => c.PlayerId == playerId)
            .Select(c => new CharacterDto
            {
                Id = c.Id,
                Name = c.Name,
                PlayerId = c.PlayerId
            })
            .ToListAsync();

        return Ok(characters);
    }

}
