package com.xnlogic.neo4jGatlingTesting

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import io.gatling.core.Predef.bootstrap._

class GetNode extends Simulation
{
	val httpConf = http
    .baseURL("http://localhost:7474")
    .acceptHeader("application/json")
 
    val cql = "MATCH (m:Movie)<-[:ACTED_IN]-(p:Person) RETURN m, collect(p) as actors"
  val scn = scenario("Get Root")
   .during(10) {
     exec(
       http("get root node")
         .get("/db/data/node/611")
         .check(status.is(200)))
     .pause(0 milliseconds, 5 milliseconds)
   }
 
  setUp(
    scn.inject(atOnce(100 users))
    ).protocols(httpConf)
} // class
