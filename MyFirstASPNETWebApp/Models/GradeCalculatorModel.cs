using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASPNETWebApp.Models
{
    public class GradeCalculatorModel
    {
        [Required(ErrorMessage = "Pleasee enter valid number")]
        [Range(0, 100, ErrorMessage = "The length must be between 0 to 100")]
        public float Assignments { get; set; }

        
        [Range(0, 100, ErrorMessage = "The length must be between 0 to 100")]
        public float Project { get; set; }

        
        [Range(0, 100, ErrorMessage = "The length must be between 0 to 100")]
        public float Quizzes { get; set; }

        
        [Range(0, 100, ErrorMessage = "The length must be between 0 to 100")]
        public float Exams { get; set; }

        
        [Range(0, 100, ErrorMessage = "The length must be between 0 to 100")]
        public float Intex { get; set; }
    }
}
