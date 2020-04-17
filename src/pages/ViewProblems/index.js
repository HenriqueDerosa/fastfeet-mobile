import React, { useCallback, useMemo, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import Layout from '../_layout/Detail'
import {
  BigTitle,
  Title,
  Text,
  Row,
  Touchable,
  TextTouchable,
  Card,
} from './styles'
import { getProblemsRequest } from '~/store/modules/problems/actions'
import { format, parseISO } from 'date-fns'
import { pt } from 'date-fns/locale'
import { ScrollView } from 'react-native'

const ViewProblems = ({ route }) => {
  const dispatch = useDispatch()
  const order = useMemo(() => route.params.order, [route])
  const problems = useSelector((state) => state.problems.list)

  useEffect(() => {
    if (order) {
      dispatch(getProblemsRequest(order.id))
    }
  }, [order])

  if (!problems) {
    return (
      <Layout padding={35}>
        <BigTitle>Carregando</BigTitle>
      </Layout>
    )
  }

  return (
    <Layout padding={35}>
      <Card>
        <BigTitle>Encomenda {order.id}</BigTitle>
        <ScrollView>
          {problems.length > 0 ? (
            problems.map((problem) => (
              <Touchable key={problem.id}>
                <TextTouchable>{problem.description}</TextTouchable>
                <TextTouchable style={{ fontSize: 10 }}>
                  {format(parseISO(problem.createdAt), 'dd/MM/yyyy', {
                    locale: pt,
                  })}
                </TextTouchable>
              </Touchable>
            ))
          ) : (
            <TextTouchable style={{ marginTop: 40 }}>
              Nenhum problema nessa encomenda
            </TextTouchable>
          )}
        </ScrollView>
      </Card>
    </Layout>
  )
}

export default ViewProblems
