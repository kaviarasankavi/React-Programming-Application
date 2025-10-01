import { useState } from 'react';

export default function ProgramsApp() {
  const [activeProgram, setActiveProgram] = useState(null);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [result, setResult] = useState('');

  const programs = [
    {
      id: 1,
      title: 'Print Natural Numbers',
      description: 'Enter how many natural numbers to print'
    },
    {
      id: 2,
      title: 'Armstrong Number Checker',
      description: 'Check if a number is Armstrong'
    },
    {
      id: 3,
      title: 'Factorial Calculator',
      description: 'Calculate factorial of a number'
    },
    {
      id: 4,
      title: 'Greatest of 3 Numbers',
      description: 'Find the greatest among three numbers'
    }
  ];

  const handleProgramSelect = (program) => {
    setActiveProgram(program);
    setInput1('');
    setInput2('');
    setInput3('');
    setResult('');
  };

  const runProgram = () => {
    if (!activeProgram) return;
    
    setResult('');
    
    if (activeProgram.id === 1) {
      const count = parseInt(input1);
      if (isNaN(count) || count <= 0) {
        setResult('Please enter a valid positive number');
        return;
      }
      
      const numbers = [];
      for (let i = 1; i <= count; i++) {
        numbers.push(i);
      }
      setResult(`Natural numbers: ${numbers.join(', ')}`);
    }
    
    else if (activeProgram.id === 2) {
      const num = parseInt(input1);
      if (isNaN(num) || num < 0) {
        setResult('Please enter a valid positive number');
        return;
      }
      
      const str = num.toString();
      const len = str.length;
      let sum = 0;
      
      for (let i = 0; i < len; i++) {
        const digit = parseInt(str[i]);
        sum += Math.pow(digit, len);
      }
      
      if (sum === num) {
        setResult(`${num} is an Armstrong number!`);
      } else {
        setResult(`${num} is not an Armstrong number. Sum is ${sum}`);
      }
    }
    
    else if (activeProgram.id === 3) {
      const n = parseInt(input1);
      if (isNaN(n) || n < 0) {
        setResult('Please enter a valid non-negative number');
        return;
      }
      
      let factorial = 1;
      for (let i = 2; i <= n; i++) {
        factorial *= i;
      }
      setResult(`Factorial of ${n} is ${factorial}`);
    }
    
    else if (activeProgram.id === 4) {
      const a = parseFloat(input1);
      const b = parseFloat(input2);
      const c = parseFloat(input3);
      
      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        setResult('Please enter three valid numbers');
        return;
      }
      
      let greatest = a;
      if (b > greatest) {
        greatest = b;
      }
      if (c > greatest) {
        greatest = c;
      }
      
      setResult(`The greatest number among ${a}, ${b}, and ${c} is ${greatest}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-900 mb-2 text-center">
          React Programming Challenges
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Click any button to run the program
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {programs.map((program) => (
            <button
              key={program.id}
              onClick={() => handleProgramSelect(program)}
              className={`p-6 rounded-lg shadow-md transition-all duration-200 text-left ${
                activeProgram && activeProgram.id === program.id
                  ? 'bg-indigo-600 text-white transform scale-105'
                  : 'bg-white text-gray-800 hover:bg-indigo-50 hover:shadow-lg'
              }`}
            >
              <div className="text-sm font-semibold mb-1">
                Program {program.id}
              </div>
              <div className={`text-lg font-medium ${
                activeProgram && activeProgram.id === program.id ? 'text-white' : 'text-indigo-700'
              }`}>
                {program.title}
              </div>
              <div className={`text-sm mt-1 ${
                activeProgram && activeProgram.id === program.id ? 'text-indigo-100' : 'text-gray-500'
              }`}>
                {program.description}
              </div>
            </button>
          ))}
        </div>

        {activeProgram && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {activeProgram.title}
            </h2>

            <div className="mb-6">
              {activeProgram.id === 4 ? (
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Number
                    </label>
                    <input
                      type="number"
                      value={input1}
                      onChange={(e) => setInput1(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter first number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Second Number
                    </label>
                    <input
                      type="number"
                      value={input2}
                      onChange={(e) => setInput2(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter second number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Third Number
                    </label>
                    <input
                      type="number"
                      value={input3}
                      onChange={(e) => setInput3(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter third number"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {activeProgram.id === 1 ? 'How many natural numbers?' : 
                     activeProgram.id === 2 ? 'Enter number to check' : 
                     'Enter a number'}
                  </label>
                  <input
                    type="number"
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter a number"
                  />
                </div>
              )}
              <button
                onClick={runProgram}
                className="mt-4 w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
              >
                Run Program
              </button>
            </div>

            {result && (
              <div className="bg-gray-50 border-l-4 border-indigo-600 p-4 rounded">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Output:
                </h3>
                <p className="text-lg text-gray-900 font-mono break-words">
                  {result}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}