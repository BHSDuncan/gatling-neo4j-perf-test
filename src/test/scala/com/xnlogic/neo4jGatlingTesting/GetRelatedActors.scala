package com.xnlogic.neo4jGatlingTesting

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import io.gatling.core.Predef.bootstrap._

class GetRelatedActors extends Simulation {
	val httpConf = http
    .baseURL("http://localhost:7474")
    .acceptHeader("application/json")
    //.extraInfoExtractor((status:Status, session:Session, request:Request, response:Response) => {
    //  println(request.getStringData)
    //  Nil})
 
    val cql = "MATCH (m:Movie {title: {t}})<-[:ACTED_IN]-(p:Person) RETURN m, collect(p) as actors"
    val title = "Unforgiven"
     
    val cQuery = """{"query": "%s", "params": {"t": "%s"}}""".format(cql, title)  

   val scn = scenario("Grab related actors to movie by title.")
   .during(10) {
     exec(
       http("get related actors")
         .post("/db/data/cypher")
         .body(StringBody(cQuery))
         .asJSON
         .check(status.is(200))
         .check(jsonPath("data")))
     .pause(0 milliseconds, 5 milliseconds)
   }
 
  setUp(
    scn.inject(ramp(100 users) over (10 seconds))
    ).protocols(httpConf)
}