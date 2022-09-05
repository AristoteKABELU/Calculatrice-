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

function randomNumber(number)
{
    return Math.floor(Math.random()*(number + 1));
}

function random_backgroundColor()
{
    let first_color = 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';
    let second_color = 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';
    let degrad = 'linear-gradient(' + randomNumber(360) + 'deg,'+ first_color +',' + second_color +')';

    document.body.style.background =  degrad;
}
