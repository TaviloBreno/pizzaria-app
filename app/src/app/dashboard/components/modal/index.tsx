"use client";

import styles from "./styles.module.scss";
import { X } from "lucide-react";
import { use } from "react";
import { OrderContext } from "@/providers/order";
import { calculateTotalOrder } from "@/lib/helper";

export function ModalOrder() {
  const { onRequestClose, order, finishOrder } = use(OrderContext);

  // Verifica se order é um array válido
  if (!Array.isArray(order) || order.length === 0) {
    return null; // ou exiba uma mensagem de fallback
  }

  // Garante que order[0].order exista antes de acessar
  const currentOrder = order[0]?.order;

  async function handleFinishOrder() {
    if (currentOrder?.id) {
      await finishOrder(currentOrder.id);
    }
  }

  return (
    <dialog className={styles.dialogContainer} open>
      <section className={styles.dialogContent}>
        <button
          className={styles.dialogBack}
          onClick={onRequestClose}
          type="button"
        >
          <X size={40} color="#FF3f4b" />
        </button>

        <article className={styles.container}>
          <h2>Detalhes do pedido</h2>

          {/* Exibe mesa */}
          <span className={styles.table}>
            Mesa <b>{currentOrder?.table ?? "N/A"}</b>
          </span>

          {/* Exibe nome do cliente, se disponível */}
          {currentOrder?.name && (
            <span className={styles.name}>
              <b>{currentOrder.name}</b>
            </span>
          )}

          {/* Renderiza os itens do pedido */}
          {order.map((item) => {
            const totalPrice = parseFloat(item.product.price) * item.amount;
            return (
              <section className={styles.item} key={item.id}>
                <span>
                  Qtd: {item.amount} - <b>{item.product.name}</b> - R${" "}
                  {totalPrice.toFixed(2)}
                </span>
                <span className={styles.description}>
                  {item.product.description}
                </span>
              </section>
            );
          })}

          {/* Total do pedido */}
          <h3 className={styles.total}>
            Valor total: R$ {calculateTotalOrder(order).toFixed(2)}
          </h3>

          {/* Botão para concluir pedido */}
          <button
            className={styles.buttonOrder}
            onClick={handleFinishOrder}
            type="button"
          >
            Concluir pedido
          </button>
        </article>
      </section>
    </dialog>
  );
}
