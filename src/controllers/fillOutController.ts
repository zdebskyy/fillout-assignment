import { Request, Response } from 'express'
import { apiKey } from '../config'
import { filterResponses } from '../helper/getFilteredAnswers'
import {
  FilterClauseType,
  ResultResponseType,
} from '../types'


export const getFilteredResponses = async (req: Request, res: Response) => {
  try {
    const { formId } = req.params
    const limit = req.query.limit ?? 10

    //mock data for testing

    // const filters: FilterClauseType[] = [
    //   {
    //     id: 'bE2Bo4cGUv49cjnqZ4UnkW',
    //     condition: 'equals',
    //     value: 'Johnny',
    //   },
    //   {
    //     id: 'fFnyxwWa3KV6nBdfBDCHEA',
    //     condition: 'greater_than',
    //     value: 1,
    //   },
    // ]

    // url i tester in postman: 
    // localhost:3000/api/fillOut/cLZojxk94ous/filteredResponses?filters=%5B%7B%22id%22%3A%20%22bE2Bo4cGUv49cjnqZ4UnkW%22%2C%20%22condition%22%3A%20%22equals%22%2C%20%22value%22%3A%20%22Johnny%22%7D%2C%7B%22id%22%3A%20%22fFnyxwWa3KV6nBdfBDCHEA%22%2C%20%22condition%22%3A%20%22greater_than%22%2C%20%22value%22%3A%201%7D%5D


    //dynamic param id pasted here on purpose, but in real life it will be extracted from req.params.formId
    const data = await fetch(
      `https://api.fillout.com/v1/api/forms/${formId}/submissions?limit=${limit}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    )
    const responseData: ResultResponseType = await data.json()

      if (req.query.filters) {
        const filters: FilterClauseType[] = JSON.parse(req.query.filters as string) 
          const filteredData = filterResponses(responseData, filters)
          return res
            .status(200)
            .json({
                responses: filteredData,
                totalResponses: filteredData.length,
                pageCount: Math.ceil(filteredData.length / Number(limit)),
                })
      }

      return res
            .status(200)
            .json(responseData)

    

  } catch (error) {
    console.log(error)
    throw new Error()
  }
}
