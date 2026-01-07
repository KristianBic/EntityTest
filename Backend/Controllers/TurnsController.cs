using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TurnsController : ControllerBase
{
    [HttpGet("match/{matchId}")]
    public IActionResult GetTurnsByMatch(int matchId)
    {
        return StatusCode(501);
    }

    [HttpGet("{id}")]
    public IActionResult GetTurn(int id)
    {
        return StatusCode(501);
    }

    [HttpPost]
    public IActionResult ExecuteTurn()
    {
        return StatusCode(501);
    }
}
