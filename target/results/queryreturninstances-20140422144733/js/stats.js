var stats = {
    type: "GROUP",
contents: {
"query-by-asset-id-and-filter-and-return-instances-0555637b29325c4a0b478c9c5dc1ba67": {
        type: "REQUEST",
        name: "query by asset id and filter and return instances",
path: "query by asset id and filter and return instances",
pathFormatted: "query-by-asset-id-and-filter-and-return-instances-0555637b29325c4a0b478c9c5dc1ba67",
stats: {
    "name": "query by asset id and filter and return instances",
    "numberOfRequests": {
        "total": "20580",
        "ok": "20580",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8980",
        "ok": "8980",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "194",
        "ok": "194",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "430",
        "ok": "430",
        "ko": "-"
    },
    "percentiles1": {
        "total": "930",
        "ok": "930",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1870",
        "ok": "1870",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 19174,
        "percentage": 93
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 838,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 568,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1159",
        "ok": "1159",
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
        "total": "20580",
        "ok": "20580",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8980",
        "ok": "8980",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "194",
        "ok": "194",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "430",
        "ok": "430",
        "ko": "-"
    },
    "percentiles1": {
        "total": "930",
        "ok": "930",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1870",
        "ok": "1870",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 19174,
        "percentage": 93
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 838,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 568,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1159",
        "ok": "1159",
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
