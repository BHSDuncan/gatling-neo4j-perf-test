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
        "total": "2908",
        "ok": "2908",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4570",
        "ok": "4570",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "180",
        "ok": "180",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "370",
        "ok": "370",
        "ko": "-"
    },
    "percentiles1": {
        "total": "520",
        "ok": "520",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1720",
        "ok": "1720",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2836,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 31,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 41,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "145",
        "ok": "145",
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
        "total": "2908",
        "ok": "2908",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4570",
        "ok": "4570",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "180",
        "ok": "180",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "370",
        "ok": "370",
        "ko": "-"
    },
    "percentiles1": {
        "total": "520",
        "ok": "520",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1720",
        "ok": "1720",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2836,
        "percentage": 97
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 31,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 41,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "145",
        "ok": "145",
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
