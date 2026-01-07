using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StatsController : ControllerBase
{
    [HttpGet("players/{playerId}")]
    public IActionResult GetPlayerStats(int playerId)
    {
        return StatusCode(501);
    }

    [HttpGet("leaderboard")]
    public IActionResult GetLeaderboard()
    {
        return StatusCode(501);
    }

    [HttpGet("characters/{characterId}")]
    public IActionResult GetCharacterStats(int characterId)
    {
        return StatusCode(501);
    }
}
