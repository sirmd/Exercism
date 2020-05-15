using System;
using System.Collections.Generic;
using System.Linq;

public class HighScores
{
    public List<int> ScoreList { get; set; }
    public HighScores(List<int> list)
    {
        this.ScoreList = list;
    }

    public List<int> Scores()
    {
        return this.ScoreList;
    }

    public int Latest()
    {
        int latest = ScoreList.LastOrDefault();

        return latest;
    }

    public int PersonalBest()
    {
        int best = ScoreList.Max();

        return best;
    }

    public List<int> PersonalTopThree()
    {
        List<int> topThree = ScoreList.OrderByDescending(x => x).Take(3).ToList();

        return topThree;
    }
}