function EqualTo()
{
	//Getting all "Argument Types" input values
	var inString 	= document.getElementById('str').value;
	var inNumber 	= +document.getElementById('num').value;
	
	var inObject 	= 
	{
		//Overwriting the primitive "valueOf" with User input
		valueOf: function()
		{
			//plus operator converts the string input value to number
			return +document.getElementById('obj').value;
		}
	};
		
	var inDate 		= new Date(document.getElementById('date').value);
	var DLbool		= document.getElementById('bool');
	var inBoolean	= DLbool.options[DLbool.selectedIndex].value;
	
	
	//Getting "Equal To" input value
	var test	= document.getElementById('testing');
	var testing	= test.options[test.selectedIndex].value;
	
	
	//Preparing result
	var result = document.getElementById('result');
	
	
	
	/*
		NOTE: 
		This part could be significantly shortened by using e.g. a "for"- or "while" loop,
		but due to simplicity and better identifiability a loop is renounced.
	*/
	if(testing === "A==A")
	{
		result.innerHTML = (inString == inString);
	}
	else if(testing === "A==B")
	{
		result.innerHTML = (inString == inNumber);
	}
	else if(testing === "A==C")
	{
		result.innerHTML = (inString == inBoolean);
	}
	else if(testing === "A==D")
	{
		result.innerHTML = (inString == inObject);
	}
	else if(testing === "A==E")
	{
		result.innerHTML = (inString == inDate);
	}
	else if(testing === "B==B")
	{
		result.innerHTML = (inNumber == inNumber);
	}
	else if(testing === "B==C")
	{
		result.innerHTML = (inNumber == inBoolean);
	}
	else if(testing === "B==D")
	{
		result.innerHTML = (inNumber == inObject);
	}
	else if(testing === "B==E")
	{
		result.innerHTML = (inNumber == inDate);
	}
	else if(testing === "C==C")
	{
		result.innerHTML = (inBoolean == inBoolean);
	}
	else if(testing === "C==D")
	{
		result.innerHTML = (inBoolean == inObject);
	}
	else if(testing === "C==E")
	{
		result.innerHTML = (inBoolean == inDate);
	}
	else if(testing === "D==D")
	{
		result.innerHTML = (inObject == inObject);
	}
	else if(testing === "D==E")
	{
		result.innerHTML = (inObject == inDate);
	}
	else if(testing === "E==E")
	{
		result.innerHTML = (inDate == inDate);
	}
	
}