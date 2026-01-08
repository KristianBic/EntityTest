public class PlayerCreateDto 
{
    [Required]
    [MaxLength(50)]
    public string Name { get; set; } = null!;
}