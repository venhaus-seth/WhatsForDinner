#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace Server.Models
{
    public class Cuisine
    {
        [Key]
        public int Id {get;set;}
        [Required]
        public string Name {get;set;}
        
    }
}