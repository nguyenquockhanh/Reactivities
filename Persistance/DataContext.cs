﻿using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistance
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Value> Values { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Value>()
                .HasData(
                    new Value{Id = 1, Name = "Value 001"},
                    new Value{Id = 2, Name = "Value 002"},
                    new Value{Id = 3, Name = "Value 003"},
                    new Value{Id = 4, Name = "Value 004"}
                );
        }
    }
}
