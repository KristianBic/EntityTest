using Backend.Data;
using Backend.DTOs;
using Backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services;

public class PlayerService : IPlayerService
{
    private readonly AppDbContext _dbContext;

    public PlayerService(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<List<PlayerDto>> GetAllAsync()
    {
        return await _dbContext.Players
            .Select(p => new PlayerDto
            {
                Id = p.Id,
                Name = p.Name
            })
            .ToListAsync();
    }

    public async Task<PlayerDto?> GetByIdAsync(int id)
    {
        var player = await _dbContext.Players.FindAsync(id);
        if (player == null) return null;

        return new PlayerDto
        {
            Id = player.Id,
            Name = player.Name
        };
    }

    public async Task<PlayerDto> CreateAsync(PlayerCreateDto dto)
    {
        if (await _dbContext.Players.AnyAsync(p => p.Name == dto.Name))
            throw new InvalidOperationException("Player name must be unique");
        
        var player = new Player
        {
            Name = dto.Name
        };

        _dbContext.Players.Add(player);
        await _dbContext.SaveChangesAsync();

        return new PlayerDto
        {
            Id = player.Id,
            Name = player.Name
        };
    }

    public async Task<PlayerDto?> UpdateAsync(int id, PlayerUpdateDto dto)
    {
        var player = await _dbContext.Players.FindAsync(id);
        if (player == null) return null;

        player.Name = dto.Name;
        await _dbContext.SaveChangesAsync();

        return new PlayerDto
        {
            Id = player.Id,
            Name = player.Name
        };
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var player = await _dbContext.Players.FindAsync(id);
        if (player == null) return false;

        _dbContext.Players.Remove(player);
        await _dbContext.SaveChangesAsync();

        return true;
    }
}
