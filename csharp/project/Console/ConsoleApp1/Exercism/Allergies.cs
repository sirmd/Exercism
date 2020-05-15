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


//using System;
//using System.Collections.Generic;

//public enum Allergen
//{
//    Eggs = 1,
//    Peanuts = 2,
//    Shellfish = 4,
//    Strawberries = 8,
//    Tomatoes = 16,
//    Chocolate = 32,
//    Pollen = 64,
//    Cats = 128
//}

//public class Allergies
//{
//    private int given;
//    private List<Allergen> allergenList = new List<Allergen>();

//    public Allergies(int mask)
//    {
//        given = mask;
//    }

//    public bool IsAllergicTo(Allergen allergen)
//    {
//        Allergen[] allergenArray = List();
//        return Array.Exists(allergenArray, element => element == allergen);
//    }

//    public Allergen[] List()
//    {
//        if (given >= 256)
//        {
//            given = given % 256;
//        }
//        for (int i = 128; i >= 1; i = i / 2)
//        {
//            if (given - i >= 0)
//            {
//                if (i == 128)
//                {
//                    allergenList.Add(Allergen.Cats);
//                }
//                else if (i == 64)
//                {
//                    allergenList.Add(Allergen.Pollen);
//                }
//                else if (i == 32)
//                {
//                    allergenList.Add(Allergen.Chocolate);
//                }
//                else if (i == 16)
//                {
//                    allergenList.Add(Allergen.Tomatoes);
//                }
//                else if (i == 8)
//                {
//                    allergenList.Add(Allergen.Strawberries);
//                }
//                else if (i == 4)
//                {
//                    allergenList.Add(Allergen.Shellfish);
//                }
//                else if (i == 2)
//                {
//                    allergenList.Add(Allergen.Peanuts);
//                }
//                else if (i == 1)
//                {
//                    allergenList.Add(Allergen.Eggs);
//                }
//                if (given - i == 0)
//                {
//                    break;
//                }
//                else
//                {
//                    given = given - i;
//                }
//            }
//        }
//        int count = allergenList.Count;
//        Allergen[] allergenArray = new Allergen[count];
//        foreach (Allergen x in allergenList)
//        {
//            count--;
//            allergenArray[count] = x;
//        }
//        return allergenArray;
//    }
//}