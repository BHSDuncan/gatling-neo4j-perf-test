gatling-neo4j-perf-test
=======================

This is meant to be run in Eclipse, although it is possible to run with Maven outside of it.  That said, I'm not sure if the 
targets are built into the POM or, if they are, I'm not sure they work.  I make no guarantees that way. :)

At the time of this writing, I'm running Eclipse Kepler (JEE bundle) on Windows 7.

This is also run against Scala 2.10.4.  If the POM doesn't pull down everything you need, you may need to install Scala in Eclipse yourself (not that difficult).

1. Make sure to run "maven install" to grab dependencies first.
2. To execute a test, right-click src/test/scala/Engine.scala, select "Run as..." and then select "Scala application."
3. In the console window (make sure it has the focus), select the number representing the desired test and follow the prompts.
4. Profit.
