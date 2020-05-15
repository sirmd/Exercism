using System;
using System.Collections.Generic;
using System.Linq;
public class GradeSchool
{
    private static Dictionary<string, int> students = new Dictionary<string, int>();
    public void Add(string student, int grade)
    {
        students.Add(student, grade);
    }

    public IEnumerable<string> Roster()
    {
        var result = students
                    .OrderBy(s => s.Value)
                    .ThenBy(s => s.Key)
                    .Select(s => s.Key)
                    .ToArray();
        students.Clear();
        return result;
    }

    public IEnumerable<string> Grade(int grade)
    {
        var result = students
                    .Where(s=>s.Value == grade)
                    .OrderBy(s => s.Key)
                    .Select(s => s.Key)
                    .ToArray();
        students.Clear();
        return result;
    }
}