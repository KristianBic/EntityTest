using System.ComponentModel.DataAnnotations;

namespace Backend.DTOs
{
    public class PlayerCreateDto
    {
        [Required]
        [MaxLength(50)]
        public string Name { get; set; } = string.Empty;
    }
}
