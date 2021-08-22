/*=================================================================================
 [Functions]
=================================================================================*/

// Function Calculate
function calculate(getFromField, addToField)
{
	let getFromFields = document.getElementsByClassName(getFromField);
	let addToFields = document.getElementsByClassName(addToField);
	let total = 0;
	
	for (let i = 0; i < getFromFields.length; i++)
	{
		if(getFromFields[i].value == '' || getFromFields[i].value == 0)
			vall = 0;
		else
			vall = +getFromFields[i].value;
		
		total += vall;
	}
	
	for (let i = 0; i < addToFields.length; i++)
	{
		addToFields[i].value = total.toFixed(2);
	}
}

// Function Sum
function sum(elm1, elm2, elm3)
{
	let total = 0;
	let total1 = document.getElementById(elm1);
	let total2 = document.getElementById(elm2);
	let total3 = document.getElementById(elm3);
	
	total = total1.value - total2.value;
	total3.value = total.toFixed(2);
}

/*===============================================================================*/