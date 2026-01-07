using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MatchesController : ControllerBase
{
    [HttpGet]
    public IActionResult GetMatches()
    {
        return StatusCode(501);
    }

    [HttpGet("{id}")]
    public IActionResult GetMatch(int id)
    {
        return StatusCode(501);
    }

    [HttpPost]
    public IActionResult CreateMatch()
    {
        return StatusCode(501);
    }

    [HttpPost("{id}/start")]
    public IActionResult StartMatch(int id)
    {
        return StatusCode(501);
    }

    [HttpPost("{id}/end")]
    public IActionResult EndMatch(int id)
    {
        return StatusCode(501);
    }
}
