#include <iostream>
using namespace std;

int main(){

    int n;
    cin >> n;
    int sum = 0;
    int i = 2;
    while (i<=(n))
    {
        if(i%2 ==0){
            sum = sum + i;
        }
        i++;
    }
    cout << "Sum of even numbers of " << n << " is " << sum << endl;
}