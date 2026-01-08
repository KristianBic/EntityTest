using System.ComponentModel.DataAnnotations;

namespace Backend.DTOs
{
    public class CreateCharacterDto
    {
        [Required(ErrorMessage = "Name is required")]
        [MaxLength(50, ErrorMessage = "Name cannot exceed 50 characters")]
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "PlayerId is required")]
        public int PlayerId { get; set; }
    }
}