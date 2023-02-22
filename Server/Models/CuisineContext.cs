using Microsoft.EntityFrameworkCore;
namespace Server.Models
{
    public class CuisineContext : DbContext
    {
        public CuisineContext(DbContextOptions<CuisineContext> options) : base(options) { }
        public DbSet<Cuisine> Cuisines { get; set; } = null!;
    }
}