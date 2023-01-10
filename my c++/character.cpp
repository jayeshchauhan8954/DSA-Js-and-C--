#include <iostream>
using namespace std;
int main (){

    char character;
    cin >> character;
    if(character>=97 && character <=122){
        cout << "this is lowercase " << character << endl;
    }else if(character>=65 && character<=90){
        cout << "this is uppercase " << character << endl;
    }else if(character>=48 && character<=57){
        cout << "this is positive number " << character << endl;
            
    }else{
        cout << "give me valid input " << character << endl;

    }
};