// Player.cs
namespace Backend.Entities
{
    public class Player {
        public int Id { get; set; }  // <-- primary key
        public string Name { get; set; } = null!;

        public ICollection<Character> Characters { get; set; } = new List<Character>();
     }
}