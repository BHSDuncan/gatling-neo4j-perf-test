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
        "total": "28",
        "ok": "28",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "710",
        "ok": "710",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3460",
        "ok": "3460",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2050",
        "ok": "2050",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "730",
        "ok": "730",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3210",
        "ok": "3210",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3460",
        "ok": "3460",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2,
        "percentage": 7
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 10
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 23,
        "percentage": 82
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
        "total": "28",
        "ok": "28",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "710",
        "ok": "710",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3460",
        "ok": "3460",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2050",
        "ok": "2050",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "730",
        "ok": "730",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3210",
        "ok": "3210",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3460",
        "ok": "3460",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2,
        "percentage": 7
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 10
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 23,
        "percentage": 82
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
