using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Entities
{
    public class Character
    {
        public int Id { get; set; }

        [Required]              // Not null in DB
        public string Name { get; set; } = null!;

        [ForeignKey("Player")]   // Foreign key constraint
        public int PlayerId { get; set; }

        public Player Player { get; set; } = null!;
    }
}
