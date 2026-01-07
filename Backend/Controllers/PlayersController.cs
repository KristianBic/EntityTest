using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlayersController : ControllerBase
{
    [HttpGet]
    public IActionResult GetPlayers()
    {
        return StatusCode(501);
    }

    [HttpGet("{id}")]
    public IActionResult GetPlayer(int id)
    {
        return StatusCode(501);
    }

    [HttpPost]
    public IActionResult CreatePlayer()
    {
        return StatusCode(501);
    }

    [HttpPut("{id}")]
    public IActionResult UpdatePlayer(int id)
    {
        return StatusCode(501);
    }

    [HttpDelete("{id}")]
    public IActionResult DeletePlayer(int id)
    {
        return StatusCode(501);
    }
}
