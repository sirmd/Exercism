using System;
using System.Collections.Generic;
using System.Security.Cryptography;

public class Robot
{
    public string Name { get; set; }
    private static HashSet<string> robotNames = new HashSet<string>();

    public Robot()
    {
        var testName = generateRobotName();
        bool nameNotUnique = robotNames.Contains(testName);
        while (nameNotUnique)
        {
            testName = generateRobotName();
            nameNotUnique = robotNames.Contains(testName);
        }

        robotNames.Add(testName);
        Name = testName;

    }

    private string generateRobotName()
    {
        string alphabet = "ABCDEFGHIJKLMNOPQRSTUVYXWZ";

        string firstLetter = alphabet.Substring(RandomNumberGenerator.GetInt32(0, alphabet.Length), 1);
        string secondLetter = alphabet.Substring(RandomNumberGenerator.GetInt32(0, alphabet.Length), 1);
        int number = RandomNumberGenerator.GetInt32(100, 999);

        return firstLetter + secondLetter + number.ToString();
    }

    public void Reset()
    {
        robotNames.Remove(Name);

        var testName = generateRobotName();
        bool nameNotUnique = robotNames.Contains(testName);
        while (nameNotUnique)
        {
            testName = generateRobotName();
            nameNotUnique = robotNames.Contains(testName);
        }

        robotNames.Add(testName);
        Name = testName;
    }
}