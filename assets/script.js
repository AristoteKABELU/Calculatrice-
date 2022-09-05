  //Function
function input_value(value)
{
    if(document.querySelector('.saisie').textContent == '0' &&
    value > '0' && value <= '9')
    {
        document.querySelector('.saisie').textContent = value;
    }
    else
    {    
        if(document.querySelector('.saisie').textContent == document.querySelector('.resultat').textContent)
        {
            if(value > '0' && value <= '9')
            {
                document.querySelector('.saisie').textContent = value;
            }
            else
            {
                document.querySelector('.saisie').textContent += String(value);  
            }
        }
        else
        {
            document.querySelector('.saisie').textContent += String(value);
        }
    }

}

function make_operation(operation)
{
    document.querySelector('.saisie').textContent = operation(eval(document.querySelector('.saisie').textContent));
}

function result()
{
    document.querySelector('.resultat').textContent = eval(document.querySelector('.saisie').textContent);
    document.querySelector('.saisie').textContent = document.querySelector('.resultat').textContent;
}


