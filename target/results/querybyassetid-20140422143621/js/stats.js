var stats = {
    type: "GROUP",
contents: {
"query-by-asset-id-and-filter-6bd2a49de2c4d94b9a80ba435b6e177e": {
        type: "REQUEST",
        name: "query by asset id and filter",
path: "query by asset id and filter",
pathFormatted: "query-by-asset-id-and-filter-6bd2a49de2c4d94b9a80ba435b6e177e",
stats: {
    "name": "query by asset id and filter",
    "numberOfRequests": {
        "total": "4369",
        "ok": "0",
        "ko": "4369"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "-",
        "ko": "10"
    },
    "maxResponseTime": {
        "total": "1110",
        "ok": "-",
        "ko": "1110"
    },
    "meanResponseTime": {
        "total": "111",
        "ok": "-",
        "ko": "111"
    },
    "standardDeviation": {
        "total": "86",
        "ok": "-",
        "ko": "86"
    },
    "percentiles1": {
        "total": "260",
        "ok": "-",
        "ko": "260"
    },
    "percentiles2": {
        "total": "350",
        "ok": "-",
        "ko": "350"
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
        "count": 4369,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "290",
        "ok": "-",
        "ko": "290"
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
        "total": "4369",
        "ok": "0",
        "ko": "4369"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "-",
        "ko": "10"
    },
    "maxResponseTime": {
        "total": "1110",
        "ok": "-",
        "ko": "1110"
    },
    "meanResponseTime": {
        "total": "111",
        "ok": "-",
        "ko": "111"
    },
    "standardDeviation": {
        "total": "86",
        "ok": "-",
        "ko": "86"
    },
    "percentiles1": {
        "total": "260",
        "ok": "-",
        "ko": "260"
    },
    "percentiles2": {
        "total": "350",
        "ok": "-",
        "ko": "350"
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
        "count": 4369,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "290",
        "ok": "-",
        "ko": "290"
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
