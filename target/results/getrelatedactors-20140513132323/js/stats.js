var stats = {
    type: "GROUP",
contents: {
"get-related-actors-48251f9d66c4d5a12800e841515eae9c": {
        type: "REQUEST",
        name: "get related actors",
path: "get related actors",
pathFormatted: "get-related-actors-48251f9d66c4d5a12800e841515eae9c",
stats: {
    "name": "get related actors",
    "numberOfRequests": {
        "total": "6977",
        "ok": "6977",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1840",
        "ok": "1840",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "78",
        "ok": "78",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "119",
        "ok": "119",
        "ko": "-"
    },
    "percentiles1": {
        "total": "250",
        "ok": "250",
        "ko": "-"
    },
    "percentiles2": {
        "total": "570",
        "ok": "570",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6947,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 16,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 14,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "348",
        "ok": "348",
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
        "total": "6977",
        "ok": "6977",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1840",
        "ok": "1840",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "78",
        "ok": "78",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "119",
        "ok": "119",
        "ko": "-"
    },
    "percentiles1": {
        "total": "250",
        "ok": "250",
        "ko": "-"
    },
    "percentiles2": {
        "total": "570",
        "ok": "570",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6947,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 16,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 14,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "348",
        "ok": "348",
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
