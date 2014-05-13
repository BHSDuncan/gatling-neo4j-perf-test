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
        "total": "163",
        "ok": "0",
        "ko": "163"
    },
    "minResponseTime": {
        "total": "30",
        "ok": "-",
        "ko": "30"
    },
    "maxResponseTime": {
        "total": "7020",
        "ok": "-",
        "ko": "7020"
    },
    "meanResponseTime": {
        "total": "4465",
        "ok": "-",
        "ko": "4465"
    },
    "standardDeviation": {
        "total": "2200",
        "ok": "-",
        "ko": "2200"
    },
    "percentiles1": {
        "total": "6830",
        "ok": "-",
        "ko": "6830"
    },
    "percentiles2": {
        "total": "6900",
        "ok": "-",
        "ko": "6900"
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
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 163,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "11",
        "ok": "-",
        "ko": "11"
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
        "total": "163",
        "ok": "0",
        "ko": "163"
    },
    "minResponseTime": {
        "total": "30",
        "ok": "-",
        "ko": "30"
    },
    "maxResponseTime": {
        "total": "7020",
        "ok": "-",
        "ko": "7020"
    },
    "meanResponseTime": {
        "total": "4465",
        "ok": "-",
        "ko": "4465"
    },
    "standardDeviation": {
        "total": "2200",
        "ok": "-",
        "ko": "2200"
    },
    "percentiles1": {
        "total": "6830",
        "ok": "-",
        "ko": "6830"
    },
    "percentiles2": {
        "total": "6900",
        "ok": "-",
        "ko": "6900"
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
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 163,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "11",
        "ok": "-",
        "ko": "11"
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
