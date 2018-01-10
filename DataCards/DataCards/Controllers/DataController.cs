using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataCards.Models;
using Microsoft.AspNetCore.Mvc;

namespace DataCards.Controllers
{
    public class DataController : Controller
    {
        public List<Person> People = new List<Person>
        {
            new Person("Marlon Ortiz", 21, "Lafayette", "Louisiana", "AT&T", "../images/marlon.jpg"),
            new Person("Jan Mendez", 25, "Boise", "Idaho", "Google", "../images/jan.jpg"),
            new Person("Stephanie Mendoza", 43, "Dallas", "Texas", "Indeed", "../images/stephanie.jpg"),
            new Person("Amelia Jacobs", 36, "Minneapolis", "Minnesota", "Intuit", "../images/amelia.jpg"),
            new Person("Erma Flores", 29, "San Jose", "California", "Paypal", "../images/erma.jpg"),
            new Person("Tabitha Brewer", 22, "Cleveland", "Ohio", "Zillow", "../images/tabitha.jpg"),
            new Person("Yvonne Diaz", 21, "Seattle", "Washington", "Amazon", "../images/yvonne.jpg"),
            new Person("Arturo Holloway", 25, "Chicago", "Illinois", "Adobe", "../images/arturo.jpg"),
            new Person("Charlene Mcbridez", 27, "Denver", "Colorado", "Microsoft", "../images/charlene.jpg"),
            new Person("Elias Morton", 33, "Tampa", "Florida", "Zendesk", "../images/elias.jpg"),
        };

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetData(string search)
        {
            if (search != null && search != "")
            {
                string CompareTerm = search.Trim().ToLower();
                List<Person> PeopleMatch = this.People.Where(p => p.Name.ToLower().Contains(CompareTerm)
                                                               || p.City.ToLower().Contains(CompareTerm)
                                                               || p.State.ToLower().Contains(CompareTerm)
                                                               || p.Company.ToLower().Contains(CompareTerm)).ToList();

                return Json(PeopleMatch);
            }
            return Json(this.People);
        }
    }
}
