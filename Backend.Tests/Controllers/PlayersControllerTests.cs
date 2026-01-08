using Xunit;
using Microsoft.EntityFrameworkCore;
using Backend.Controllers;
using Backend.Data;
using Backend.Entities;
using Backend.DTOs;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Backend.Tests
{
    public class PlayersControllerTests
    {
        private AppDbContext GetDbContext()
        {
            var options = new DbContextOptionsBuilder<AppDbContext>()
                .UseInMemoryDatabase(Guid.NewGuid().ToString())
                .Options;
            return new AppDbContext(options);
        }

        [Fact]
        public async Task GetPlayers_ReturnsEmptyList_WhenNoPlayers()
        {
            var context = GetDbContext();
            var controller = new PlayersController(context);

            var result = await controller.GetPlayers() as OkObjectResult;

            Assert.NotNull(result);
            var players = result.Value as System.Collections.Generic.List<PlayerDto>;
            Assert.Empty(players);
        }

        [Fact]
        public async Task CreatePlayer_AddsPlayer()
        {
            var context = GetDbContext();
            var controller = new PlayersController(context);

            var dto = new PlayerCreateDto { Name = "TestPlayer" };
            var result = await controller.CreatePlayer(dto) as CreatedAtActionResult;

            Assert.NotNull(result);
            var player = result.Value as PlayerDto;
            Assert.Equal("TestPlayer", player.Name);
        }
    }
}
