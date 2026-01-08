using System.ComponentModel.DataAnnotations;

namespace Backend.DTOs
{
    public class UpdateCharacterDto
    {
        [Required]
        public string Name { get; set; } = null!;
    }
}