var stats = {
    type: "GROUP",
contents: {
"traverse-and-return-all-non-deleted-assets--instances-8bcd725f9b6effab72204ef395c91995": {
        type: "REQUEST",
        name: "traverse and return all non-deleted assets' instances",
path: "traverse and return all non-deleted assets' instances",
pathFormatted: "traverse-and-return-all-non-deleted-assets--instances-8bcd725f9b6effab72204ef395c91995",
stats: {
    "name": "traverse and return all non-deleted assets' instances",
    "numberOfRequests": {
        "total": "29",
        "ok": "29",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "630",
        "ok": "630",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2860",
        "ok": "2860",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1846",
        "ok": "1846",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "606",
        "ok": "606",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2710",
        "ok": "2710",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2860",
        "ok": "2860",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4,
        "percentage": 13
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 23,
        "percentage": 79
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    }
}
    }
},
name: "Global Information",
path: "",
pathFormatted: "missing-name-b06d1db11321396efb70c5c483b11923",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "29",
        "ok": "29",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "630",
        "ok": "630",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2860",
        "ok": "2860",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1846",
        "ok": "1846",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "606",
        "ok": "606",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2710",
        "ok": "2710",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2860",
        "ok": "2860",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4,
        "percentage": 13
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 23,
        "percentage": 79
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
