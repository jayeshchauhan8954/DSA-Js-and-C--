#include <iostream>
using namespace std;

int main(){
    int n;
    cin >> n;
    int sum = 0;
    int i = 1;
    while (i<=n)
    {
        /* code */
        sum = sum + i;
        i++;
    }
    cout << "Value of sum is " << sum << endl;
}