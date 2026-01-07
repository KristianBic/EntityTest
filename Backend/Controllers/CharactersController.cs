using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CharactersController : ControllerBase
{
    [HttpGet]
    public IActionResult GetCharacters()
    {
        return StatusCode(501);
    }

    [HttpGet("{id}")]
    public IActionResult GetCharacter(int id)
    {
        return StatusCode(501);
    }

    [HttpPost]
    public IActionResult CreateCharacter()
    {
        return StatusCode(501);
    }

    [HttpPut("{id}")]
    public IActionResult UpdateCharacter(int id)
    {
        return StatusCode(501);
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteCharacter(int id)
    {
        return StatusCode(501);
    }
}
