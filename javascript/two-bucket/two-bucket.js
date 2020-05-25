export class TwoBucket {
    constructor(buckOne, buckTwo, goal, starterBuck) {

        this.info = {
            "one": buckOne,
            "two": buckTwo,
            "starter": starterBuck,
            "goal": goal,
            "totalMoves": 1
        };

        this.info["starter"] === "one" ?
            this.buckets = { "one": buckOne, "two": 0 } :
            this.buckets = { "one": 0, "two": buckTwo };

    }

    moves() {

        /*
         * While any bucket current volume is different from the goal
         * Fill the starter bucket if it is empty
         * If the starter is not empty, pour it in the other bucket if the other is empty, 
         * Else empty the other bucket 
         */
        while (this.buckets["one"] !== this.info["goal"] &&
            this.buckets["two"] !== this.info["goal"]) {

            if (this.info["starter"] === "one") {
                if (this.buckets["one"] === 0) {
                    this.fill("one")
                }
                else {
                    if (this.isFree("two") > 0) this.pour("one", "two")
                    else this.empty("two")
                }
            }
            else {
                if (this.buckets["two"] === 0) {
                    this.fill("two")
                }
                else {
                    if (this.isFree("one") > 0) this.pour("two", "one")
                    else this.empty("one")
                }
            }

        }

        return this.info["totalMoves"];

    }

    get goalBucket() {
        return this.buckets["one"] == this.info["goal"] ?
            "one" :
            "two";
    }

    get otherBucket() {
        return this.buckets["one"] == this.info["goal"] ?
            this.buckets["two"] :
            this.buckets["one"];
    }

    isFree(bucket) {
        return this.info[bucket] - this.buckets[bucket];
    }

    fill(bucket) {
        this.info["totalMoves"]++;
        this.buckets[bucket] = this.info[bucket];
    }

    empty(bucket) {
        this.info["totalMoves"]++;
        this.buckets[bucket] = 0;
    }

    pour(from, to) {
        this.info["totalMoves"]++;
        let pourAmount = Math.min(this.buckets[from], this.isFree(to));
        this.buckets[from] -= pourAmount;
        this.buckets[to] += pourAmount;
    }


}