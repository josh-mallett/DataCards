using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataCards.Models
{
    public class Person
    {
        public Person(string Name, int Age, string City, string State, string Company, string Picture)
        {
          this.Name = Name;
          this.Age = Age;
          this.City = City;
          this.State = State;
          this.Company = Company;
          this.Picture = Picture;
        }
        public string Name { get; set; }
        public int Age { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Company { get; set; }
        public string Picture { get; set; }
    }
}
