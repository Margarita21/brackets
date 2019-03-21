module.exports = function check(str, bracketsConfig) {
  var stack = [], el, res, s=0, z, size;
	var k = 0;
	var d_str = []; 
	var new_str = []; 
	var j;
	d_str=str;
	var seven=0, eight=0;
	for( var i = 0; i < d_str.length; i++){
		if(i===-1){
			return true;
		}
	switch (d_str[i]) {
	    case '[':
		case '(':
		case '{':
			stack.push( d_str[i] );
			k++;
		break;
	    case '|':
			if(s===0)
			{
				s++;
				stack.push( d_str[i] );
			}
			if(s!=0)
			{
				if( d_str[i-1]==='|')
				{
					s--;
					new_str = [];
					for(j=0; j < d_str.length; j++)
					{
						if( (j != i) && (j != i-1))
						{
							new_str = new_str + d_str[j] ;
						}
					}
					i=i-2;
					d_str=new_str;
					stack.pop();					
				}
			}
		break;
	    case ')':
			if(d_str[i-1]==='(')
			{
				k--;
				new_str = [];
				for(j=0; j < d_str.length; j++)
					{
						if( (j != i) && (j != i-1))
						{
							new_str = new_str + d_str[j] ;
						}
					}
				i=i-2;
				d_str=new_str;
				stack.pop();	
			}
			else 
			{
				return false;
			}
		break;
		case ']':
			if(d_str[i-1]==='[')
			{
				k--;
				new_str = [];
				for(j=0; j < d_str.length; j++)
					{
						if( (j != i) && (j != i-1))
						{
							new_str = new_str + d_str[j] ;
						}
					}
				i=i-2;
				d_str=new_str;
				stack.pop();	
			}
		break;
		case '}':
			if(d_str[i-1]==='{')
			{
				k--;
				new_str = [];
				for(j=0; j < d_str.length; j++)
					{
						if( (j != i) && (j != i-1))
						{
							new_str = new_str + d_str[j] ;
						}
					}
				i=i-2;
				d_str=new_str;
				stack.pop();	
			}
		break;
		case '1':
		case '3':
		case '5':
			stack.push( d_str[i] );
			k++;
		break;
		
		case '7':
			if(seven===0)
			{
				seven++;
				stack.push( d_str[i] );
			}
			if(seven!=0)
			{
				if(d_str[i-1]==='7')
				{
					seven--;
					new_str = [];
				    for(j=0; j < d_str.length; j++)
					{
						if( (j != i) && (j != i-1))
						{
							new_str = new_str + d_str[j] ;
						}
					}
					i=i-2;
					d_str=new_str;
					stack.pop();	
				}
			}
		break;
		case '8':
			if(eight===0)
			{
				eight++;
				stack.push( str[i] );
			}
			if(eight!=0)
			{
				if(d_str[i-1]==='8')
				{
					eight--;
					new_str = [];
					for(j=0; j < d_str.length; j++)
					{
						if( (j != i) && (j != i-1))
						{
							new_str = new_str + d_str[j] ;
						}
					}
					i=i-2;
					d_str=new_str;
					stack.pop();	
				}
			}
		break;
		case '2':
			if(d_str[i-1]==='1')
			{
				k--;
				new_str = [];
				for(j=0; j < d_str.length; j++)
				{
					if( (j != i) && (j != i-1))
					{
						new_str = new_str + d_str[j] ;
					}
				}
				i=i-2;
				d_str=new_str;
				stack.pop();	
			}
		break;
		case '4':
			z=1;
			if(d_str[i-1]==='3')
			{
				k--;
				new_str = [];
				    for(j=0; j < d_str.length; j++)
					{
						if( (j != i) && (j != i-1))
						{
							new_str = new_str + d_str[j] ;
						}
					}
				i=i-2;
				d_str=new_str;
				stack.pop();	
			}
		break;
		case '6':
			if(d_str[i-1]==='5')
			{
				k--;
				new_str = [];
				    for(j=0; j < d_str.length; j++)
					{
						if( (j != i) && (j != i-1))
						{
							new_str = new_str + d_str[j] ;
						}
					}
				i=i-2;
				d_str=new_str;
				stack.pop();	
			}
		break;
	    default:
			return false;
	}
}		
		if( k!=0 || s!=0 || seven!=0 || eight!=0)
		{
			return false;
		}
		else return true;
}
