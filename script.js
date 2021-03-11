let examples = [
    ["The easiest way to earn points with Fetch Rewards is to just shop for the products you already love. If you have any participating brands on your receipt, you'll get points based on the cost of the products. You don't need to clip any coupons or scan individual barcodes. Just scan each grocery receipt after you shop and we'll find the savings for you.", "The easiest way to earn points with Fetch Rewards is to just shop for the items you already buy. If you have any eligible brands on your receipt, you will get points based on the total cost of the products. You do not need to cut out any coupons or scan individual UPCs. Just scan your receipt after you check out and we will find the savings for you."],
    ["The easiest way to earn points with Fetch Rewards is to just shop for the products you already love. If you have any participating brands on your receipt, you'll get points based on the cost of the products. You don't need to clip any coupons or scan individual barcodes. Just scan each grocery receipt after you shop and we'll find the savings for you.", "We are always looking for opportunities for you to earn more points, which is why we also give you a selection of Special Offers. These Special Offers are opportunities to earn bonus points on top of the regular points you earn every time you purchase a participating brand. No need to pre-select these offers, we'll give you the points whether or not you knew about the offer. We just think it is easier that way."],
    ["I am using the same words, but in a different order", "In using a but different the same words order I am"],
    ["I am using slightly different words, but in the same order", "I am using slightly different vocabulary, but in the same order"]
]

$(document).ready(function() {
    $("#compareButton").on("click", function() {
        let results = textSimilarity($("#fieldA").val(), $("#fieldB").val());
        $("#results").text(results[0].toFixed(3));

        let debugText = "";
        for (let i = 1; i < results.length; i ++)
            debugText += 'phrase length ' + i + ': ' + results[i].toFixed(3) + '<br\>';

        $("#debug").html(debugText);
    });

    $(".exampleButton").on("click", function(e) {
        let example = examples[$(e.currentTarget).data("exampleNum")];
        $("#fieldA").val(example[0]);
        $("#fieldB").val(example[1]);
    });
});