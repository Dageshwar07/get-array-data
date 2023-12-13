import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
    const data = [{

        name: "dageshwar",
        surname: "das",
        Address: [
            {
                Hn: 113,
                city: 'bhilai',
                contry: 'India'
            }, {
                Hn: 111,
                city: 'banglore',
                contry: 'India'
            }, {
                Hn: 111,
                city: 'banglore',
                contry: 'India'
            }
        ]

    }, {

        name: "pratik",
        surname: "verma",
        Address: [{
            Hn: 111,
            city: 'banglore',
            contry: 'India'
        },
        {
            Hn: 111,
            city: 'banglore',
            contry: 'India'
        }, {
            Hn: 111,
            city: 'banglore',
            contry: 'India'
        }]



    }]
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Surname
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                       
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((item, index) =>


                            <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    {index + 1}
                                </th>
                                <td className="px-6 py-4">
                                    {item.name}
                                </td>
                                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    {item.surname}
                                </td>


                                <td className="px-6 py-4">

                                    {item.Address.map((add, ind) =>
                                        <tr key={ind} className="border-b border-gray-200 dark:border-gray-700">


                                            <td className="px-6 py-4">
                                                {add.Hn}
                                            </td>

                                            <td className="px-6 py-4">
                                                {add.city}
                                            </td>
                                            <td className="px-6 py-4">
                                                {add.contry}
                                            </td>
                                        </tr>


                                    )}

                                </td>

                                

                               
                            </tr>

                        )

                    }


                </tbody>

            </table>
        </div>

    )
}

export default App