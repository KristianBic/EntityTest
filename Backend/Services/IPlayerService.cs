using Backend.DTOs;

namespace Backend.Services;

public interface IPlayerService
{
    Task<List<PlayerDto>> GetAllAsync();
    Task<PlayerDto?> GetByIdAsync(int id);
    Task<PlayerDto> CreateAsync(PlayerCreateDto dto);
    Task<PlayerDto?> UpdateAsync(int id, PlayerUpdateDto dto);
    Task<bool> DeleteAsync(int id);
}
