using System;
using System.Collections.Generic;
using System.Linq;

public enum Allergen
{
    Eggs = 1,
    Peanuts = 2,
    Shellfish = 4,
    Strawberries = 8,
    Tomatoes = 16,
    Chocolate = 32,
    Pollen = 64,
    Cats = 128
}

public class Allergies
{
    private int allergieScore;
    private List<Allergen> allergenList = new List<Allergen>();

    public Allergies(int mask)
    {
        allergieScore = mask >= 256 ? mask % 256 : mask;
    }

    public bool IsAllergicTo(Allergen allergen)
    {
        Allergen[] allergies = List();
        return allergies.Contains(allergen);
    }

    public Allergen[] List()
    {

        for (int i = 128; i >= 1; i = i / 2)
        {
            if (allergieScore - i >= 0)
            {
                Allergen enumToAdd = (Allergen)Enum.Parse(typeof(Allergen), Enum.GetName(typeof(Allergen), i));
                allergenList.Insert(0, enumToAdd);

                allergieScore -= i;
            }
        }
        Allergen[] allergies = allergenList.ToArray();


        return allergies;
    }
}