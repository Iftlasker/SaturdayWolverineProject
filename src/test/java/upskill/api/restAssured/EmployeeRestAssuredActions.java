package upskill.api.restAssured;

import io.restassured.http.ContentType;
import static io.restassured.RestAssured.*;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchema;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.testng.Assert.assertTrue;

import java.io.File;

import org.testng.annotations.Test;

import com.github.fge.jsonschema.SchemaVersion;
import com.github.fge.jsonschema.cfg.ValidationConfiguration;
import com.github.fge.jsonschema.main.JsonSchemaFactory;

import cucumber.api.java.en.Then;

public class EmployeeRestAssuredActions {

	public void createEmployeeRecord() throws Throwable {
	
		given().
			body(new File(System.getProperty("user.dir") + "/src/test/resource/ApiRequestPayloads/CreateEmployeePayload.json")).
		when().
			header("Content-Type", "application/json").					//Setting the header
			post("https://dummy.restapiexample.com/api/v1/create").		//Setting the request url
		then().
			assertThat().statusCode(200).								//Verify the status code
		and().
			body(matchesJsonSchema(new File(System.getProperty("user.dir") 
					+ "/src/test/resource/ApiResponseSchemas/CreateEmployeeSchema.json"))).	 //Verify the response body using json schema
		and().
			contentType(ContentType.JSON);								//Verify the response body is in json		
	}

	public void updateEmployeeRecord() throws Throwable {
		
		given().
			pathParam("id", "3017").											//Setting Parameter Employee id
			body(new File(System.getProperty("user.dir") + "/src/test/resource/ApiRequestPayloads/UpdateEmployeePayload.json")).
		when().
			header("Content-Type", "application/json").					//Setting the header
			put("https://dummy.restapiexample.com/api/v1/update/{id}").		//Setting the request url
		then().
			assertThat().statusCode(200).								//Verify the status code
		and().
			body(matchesJsonSchema(new File(System.getProperty("user.dir") 
					+ "/src/test/resource/ApiResponseSchemas/UpdateEmployeeSchema.json"))).	 //Verify the response body using json schema
		and().
			contentType(ContentType.JSON);								//Verify the response body is in json	
	}

	public void getAllEmployeeData() throws Throwable {

		given().
		when().
			header("Content-Type", "application/json").					//Setting the header
			get("https://dummy.restapiexample.com/api/v1/employees").	//Setting the request url
		then().
			assertThat().statusCode(200).								//Verify the status code
		and().
			body(matchesJsonSchema(new File(System.getProperty("user.dir") 
					+ "/src/test/resource/ApiResponseSchemas/GetAllEmployeeSchema.json"))).	 //Verify the response body using json schema
		and().
			contentType(ContentType.JSON);								//Verify the response body is in json	
	}
	@Test
	public void getEmployeeDataById() throws Throwable {
		
		//File schema = new File(System.getProperty("user.dir") 
		//					+ "/src/test/resource/ApiResponseSchemas/GetEmployeeSchema.json");

		
		//JsonSchemaFactory jsonSchemaFactory = JsonSchemaFactory.newBuilder()
		//	      .setValidationConfiguration(
		//	        ValidationConfiguration.newBuilder()
		//	          .setDefaultVersion(SchemaVersion.DRAFTV4).freeze())
		//	            .freeze();
		
		given().
		pathParam("id", "5").											//Setting Parameter Employee id
	when().
		header("Content-Type", "application/json").						//Setting the header
		get("https://dummy.restapiexample.com/api/v1/employee/{id}").
		//Setting the request url
	then().log().all().
		assertThat().statusCode(200).									//Verify the status code
	and().
		body(matchesJsonSchema(new File(System.getProperty("user.dir") 
				+ "/src/test/resource/ApiResponseSchemas/GetEmployeeSchema.json"))).	//Verify the response body using json schema
	and().
		contentType(ContentType.JSON);
		
		
		//String response = given().
		//	pathParam("id", "4").											//Setting Parameter Employee id
		//when().
		//	header("Content-Type", "application/json").						//Setting the header
		//	get("https://dummy.restapiexample.com/api/v1/employee/{id}")
		//	.asString();	//Setting the request url
		
		//assertThat(response, matchesJsonSchemaInClasspath("GetEmployeeSchema.json").);
		
		//System.out.println(response);
		
		
		 /*given().
		 pathParam("id", "4").											//Setting Parameter Employee id
				when().
				header("Content-Type", "application/json").						//Setting the header
				get("https://dummy.restapiexample.com/api/v1/employee/{id}")
				.then().
				assertThat().statusCode(200).								//Verify the status code
			and().log().body().and().assertThat()
			   .body(matchesJsonSchemaInClasspath("GetEmployeeSchema.json");*/
			        
		/*// Given
		JsonSchemaFactory jsonSchemaFactory = 
				JsonSchemaFactory.newBuilder().setValidationConfiguration(ValidationConfiguration.newBuilder().setDefaultVersion(SchemaVersion.DRAFTV4).freeze()).freeze();

		// When
		get("https://dummy.restapiexample.com/api/v1/employee/5")
		.then().assertThat().log().all().and().assertThat()
		.body(matchesJsonSchemaInClasspath("GetEmployeeSchema.json")
				.using(jsonSchemaFactory));		*/
		
		
		/*get("https://dummy.restapiexample.com/api/v1/employee/10")
		.then()
		.assertThat().log().all().and().assertThat()
		.body(matchesJsonSchemaInClasspath("GetEmployeeSchema.json"));*/
		
		
		
		
		
		
		
		
				//Setting the request url
				
				//assertThat(response, matchesJsonSchemaInClasspath("GetEmployeeSchema.json").);
		
		
		
		//then().log().all().and().assertThat().
		
		//body(matchesJsonSchemaInClasspath("GetEmployeeSchema.json"))
		//.statusCode(200);
		
		//.and().log().all().and().
		//assertThat().statusCode(200);								//Verify the status code
		//and().
		
		//body("status", Matchers.equalTo("success")).
		
		
	//	assertThat().body(JsonSchemaValidator.matchesJsonSchema(new File("J:/Upskill1/Maven Project/SaturdayWolverineProject/src/test/resource/ApiResponseSchemas/GetEmployeeSchema.json")));
		
	
		//assertThat().body(matchesJsonSchema(new File(System.getProperty("user.dir") 
		//			+ "/src/test/resource/ApiResponseSchemas/GetEmployeeSchema.json")));	//Verify the response body using json schema
		//and().
		//	contentType(ContentType.JSON);									//Verify the response body is in json
	}

	
	public void deleteEmployeeRecord() throws Throwable {

		given().
			pathParam("id", "3017").										//Setting Parameter Employee id
		when().
			header("Content-Type", "application/json").						//Setting the header
			delete("https://dummy.restapiexample.com/api/v1/delete/{id}").	//Setting the request url
		then().
			assertThat().statusCode(200).									//Verify the status code
		and().
			body(matchesJsonSchema(new File(System.getProperty("user.dir") 
					+ "/src/test/resource/ApiResponseSchemas/DeleteEmployeeSchema.json"))).	//Verify the response body using json schema
		and().
			contentType(ContentType.JSON);									//Verify the response body is in json
	}
}
