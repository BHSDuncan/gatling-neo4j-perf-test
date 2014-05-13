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
        "total": "100",
        "ok": "7",
        "ko": "93"
    },
    "minResponseTime": {
        "total": "57480",
        "ok": "57480",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60170",
        "ok": "59960",
        "ko": "60170"
    },
    "meanResponseTime": {
        "total": "59945",
        "ok": "59056",
        "ko": "60011"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "60040",
        "ok": "59960",
        "ko": "60040"
    },
    "percentiles2": {
        "total": "60120",
        "ok": "59960",
        "ko": "60120"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7,
        "percentage": 7
    },
    "group4": {
        "name": "failed",
        "count": 93,
        "percentage": 93
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0",
        "ko": "1"
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
        "total": "100",
        "ok": "7",
        "ko": "93"
    },
    "minResponseTime": {
        "total": "57480",
        "ok": "57480",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60170",
        "ok": "59960",
        "ko": "60170"
    },
    "meanResponseTime": {
        "total": "59945",
        "ok": "59056",
        "ko": "60011"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "60040",
        "ok": "59960",
        "ko": "60040"
    },
    "percentiles2": {
        "total": "60120",
        "ok": "59960",
        "ko": "60120"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 7,
        "percentage": 7
    },
    "group4": {
        "name": "failed",
        "count": 93,
        "percentage": 93
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0",
        "ko": "1"
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
